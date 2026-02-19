// ============================================
// InstallBanner.jsx — Sistema de Invitación a la Instalación PWA
// Feria Virtual Esperanza
// Integración: importar en App.jsx y colocar <InstallBanner /> al final del JSX
// ============================================

import { useState, useEffect } from 'react';

// ── Constantes de localStorage ──────────────────────────────────────────────
const DISMISSED_KEY = 'feria_install_dismissed_at';
const COOLDOWN_HOURS = 24; // Horas antes de volver a mostrar tras cerrar con "X"

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible]               = useState(false);
  const [isIOS, setIsIOS]                   = useState(false);
  const [isInstalled, setIsInstalled]       = useState(false);
  const [installing, setInstalling]         = useState(false);

  useEffect(() => {
    // ── 1. Detectar si ya está instalada como standalone ──────────────────
    const standalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true; // Safari iOS
    if (standalone) {
      setIsInstalled(true);
      return; // No mostrar nada si ya está instalada
    }

    // ── 2. Detectar iOS (Safari no soporta beforeinstallprompt) ───────────
    const ua = window.navigator.userAgent;
    const ios = /iphone|ipad|ipod/i.test(ua) && !window.MSStream;
    setIsIOS(ios);

    // ── 3. Verificar cooldown del dismiss ─────────────────────────────────
    const shouldShow = () => {
      const dismissedAt = localStorage.getItem(DISMISSED_KEY);
      if (!dismissedAt) return true;
      const hoursSince = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60);
      return hoursSince >= COOLDOWN_HOURS;
    };

    if (ios) {
      // iOS: mostrar instrucciones de instalación manual si aplica
      if (shouldShow()) {
        setTimeout(() => setVisible(true), 2500); // Aparece tras 2.5s
      }
      return;
    }

    // ── 4. Capturar beforeinstallprompt (Android / Desktop Chrome) ────────
    const handler = (e) => {
      e.preventDefault(); // Evita el banner automático del navegador
      setDeferredPrompt(e);
      if (shouldShow()) {
        setTimeout(() => setVisible(true), 2500);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // ── 5. Detectar instalación exitosa ───────────────────────────────────
    window.addEventListener('appinstalled', () => {
      setVisible(false);
      setDeferredPrompt(null);
      console.log('✅ Feria Esperanza instalada correctamente');
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // ── Función: disparar el prompt nativo ────────────────────────────────────
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    setInstalling(true);

    try {
      await deferredPrompt.prompt(); // Lanza el diálogo nativo del navegador
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('✅ Usuario aceptó la instalación');
        setVisible(false);
      } else {
        console.log('❌ Usuario canceló la instalación');
      }
    } catch (err) {
      console.error('Error al lanzar el prompt:', err);
    } finally {
      setDeferredPrompt(null);
      setInstalling(false);
    }
  };

  // ── Función: cerrar banner y guardar timestamp ────────────────────────────
  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISSED_KEY, String(Date.now()));
  };

  // No renderizar si está instalada o no hay razón para mostrar
  if (isInstalled || !visible) return null;

  return (
    <>
      {/* ── Estilos inyectados ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        .feria-banner-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 9998;
          animation: fadeInOverlay 0.3s ease;
        }

        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .feria-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          margin: 0 12px 12px;
          background: linear-gradient(135deg, #74ACDF 0%, #4A90C4 100%);
          border-radius: 20px;
          padding: 20px 16px 20px 20px;
          box-shadow:
            0 -4px 32px rgba(0,0,0,0.18),
            0 2px 8px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.25);
          font-family: 'Nunito', sans-serif;
          animation: slideUp 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(255,255,255,0.3);
        }

        @keyframes slideUp {
          from {
            transform: translateY(120%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .feria-banner__close {
          position: absolute;
          top: 10px;
          right: 12px;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          line-height: 1;
        }

        .feria-banner__close:hover {
          background: rgba(255,255,255,0.35);
        }

        .feria-banner__body {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .feria-banner__icon {
          width: 62px;
          height: 62px;
          border-radius: 14px;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          border: 2px solid rgba(255,255,255,0.4);
        }

        .feria-banner__content {
          flex: 1;
          min-width: 0;
        }

        .feria-banner__title {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 800;
          margin: 0 0 4px;
          line-height: 1.25;
          text-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }

        .feria-banner__subtitle {
          color: rgba(255,255,255,0.88);
          font-size: 12.5px;
          font-weight: 600;
          margin: 0 0 14px;
          line-height: 1.4;
        }

        .feria-banner__btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFD700;
          color: #1a3a5c;
          border: none;
          border-radius: 10px;
          padding: 9px 18px;
          font-size: 13.5px;
          font-weight: 800;
          font-family: 'Nunito', sans-serif;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
          box-shadow: 0 3px 10px rgba(255,215,0,0.4);
          white-space: nowrap;
        }

        .feria-banner__btn:hover {
          background: #FFE033;
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(255,215,0,0.5);
        }

        .feria-banner__btn:active {
          transform: translateY(0);
        }

        .feria-banner__btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* ── iOS specific ── */
        .feria-banner--ios .feria-banner__ios-hint {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 10px 12px;
          margin-top: 4px;
        }

        .feria-banner__ios-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .feria-banner__ios-text {
          color: rgba(255,255,255,0.95);
          font-size: 12.5px;
          font-weight: 600;
          line-height: 1.5;
          margin: 0;
        }

        .feria-banner__ios-text strong {
          color: #FFD700;
        }

        /* Flecha iOS apuntando hacia abajo */
        .feria-banner__ios-arrow {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #4A90C4;
        }

        @media (min-width: 480px) {
          .feria-banner {
            max-width: 480px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            margin: 0 0 20px;
          }
          @keyframes slideUp {
            from { transform: translateX(-50%) translateY(120%); opacity: 0; }
            to   { transform: translateX(-50%) translateY(0);    opacity: 1; }
          }
        }
      `}</style>

      {/* Overlay de fondo */}
      <div className="feria-banner-overlay" onClick={handleDismiss} />

      {/* Banner principal */}
      <div className={`feria-banner${isIOS ? ' feria-banner--ios' : ''}`} role="dialog" aria-label="Instalar app Feria Esperanza">

        {/* Botón cerrar */}
        <button
          className="feria-banner__close"
          onClick={handleDismiss}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="feria-banner__body">
          {/* Ícono de la app */}
          <img
            src="/logo192.png"
            alt="Feria Virtual Esperanza"
            className="feria-banner__icon"
          />

          <div className="feria-banner__content">
            <p className="feria-banner__title">
              🌻 ¡Llevá la Feria en tu bolsillo!
            </p>

            {!isIOS ? (
              /* ── Android / Desktop: botón de instalación nativo ── */
              <>
                <p className="feria-banner__subtitle">
                  Instalá la app para acceder más rápido, sin internet y sin abrir el navegador.
                </p>
                <button
                  className="feria-banner__btn"
                  onClick={handleInstallClick}
                  disabled={installing}
                >
                  {installing ? '⏳ Instalando...' : '⬇️ Instalar gratis'}
                </button>
              </>
            ) : (
              /* ── iOS: instrucciones manuales ── */
              <>
                <p className="feria-banner__subtitle">
                  Agregala a tu pantalla de inicio para una mejor experiencia.
                </p>
                <div className="feria-banner__ios-hint">
                  <span className="feria-banner__ios-icon">📤</span>
                  <p className="feria-banner__ios-text">
                    Tocá el ícono de <strong>Compartir</strong> y luego{' '}
                    <strong>"Añadir a la pantalla de inicio"</strong>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}