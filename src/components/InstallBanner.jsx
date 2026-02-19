// ============================================
// InstallBanner.jsx — Sistema de Invitación a la Instalación PWA
// Feria Virtual Esperanza
// Estrategia doble:
//   - Si beforeinstallprompt dispara → botón lanza el prompt nativo
//   - Si NO dispara (común en móvil) → muestra instrucciones manuales
// ============================================

import { useState, useEffect } from 'react';

const DISMISSED_KEY  = 'feria_install_dismissed_at';
const COOLDOWN_HOURS = 24;

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible]               = useState(false);
  const [isIOS, setIsIOS]                   = useState(false);
  const [showManual, setShowManual]         = useState(false);
  const [installing, setInstalling]         = useState(false);

  useEffect(() => {
    // ── 1. Ya está instalada como standalone → no mostrar nada ────────────
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;
    if (isStandalone) return;

    // ── 2. Verificar cooldown ─────────────────────────────────────────────
    const shouldShow = () => {
      const dismissedAt = localStorage.getItem(DISMISSED_KEY);
      if (!dismissedAt) return true;
      const hoursSince = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60);
      return hoursSince >= COOLDOWN_HOURS;
    };
    if (!shouldShow()) return;

    // ── 3. Detectar iOS ───────────────────────────────────────────────────
    const ua  = window.navigator.userAgent;
    const ios = /iphone|ipad|ipod/i.test(ua) && !window.MSStream;
    setIsIOS(ios);

    if (ios) {
      setTimeout(() => setVisible(true), 2500);
      return;
    }

    // ── 4. Android/Desktop: esperar beforeinstallprompt ───────────────────
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setVisible(true), 2500);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // ── 5. Fallback: si en 6s no disparó el evento → instrucciones manuales
    const fallbackTimer = setTimeout(() => {
      setDeferredPrompt((current) => {
        if (!current) {
          setShowManual(true);
          setVisible(true);
        }
        return current;
      });
    }, 6000);

    // ── 6. Detectar instalación exitosa ───────────────────────────────────
    const installedHandler = () => {
      setVisible(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', installedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    setInstalling(true);
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(outcome === 'accepted' ? '✅ Instaló la app' : '❌ Canceló');
      setVisible(false);
    } catch (err) {
      console.error('Error al lanzar prompt:', err);
    } finally {
      setDeferredPrompt(null);
      setInstalling(false);
    }
  };

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISSED_KEY, String(Date.now()));
  };

  if (!visible) return null;

  const showNativeButton   = !isIOS && !showManual && deferredPrompt;
  const showAndroidManual  = !isIOS && (showManual || !deferredPrompt);
  const showIOSInstructions = isIOS;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        .fb-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.4);
          z-index: 9998;
          animation: fb-fade .3s ease;
        }
        @keyframes fb-fade { from{opacity:0} to{opacity:1} }

        .fb-banner {
          position: fixed; bottom: 0; left: 0; right: 0;
          z-index: 9999;
          margin: 0 12px 16px;
          background: linear-gradient(145deg, #74ACDF 0%, #3d8fc4 100%);
          border-radius: 20px;
          padding: 18px 16px 18px 18px;
          box-shadow: 0 -4px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25);
          font-family: 'Nunito', sans-serif;
          animation: fb-slide .45s cubic-bezier(.34,1.56,.64,1);
          border: 1px solid rgba(255,255,255,0.3);
        }
        @keyframes fb-slide {
          from { transform: translateY(120%); opacity: 0 }
          to   { transform: translateY(0);    opacity: 1 }
        }

        .fb-close {
          position: absolute; top: 10px; right: 12px;
          background: rgba(255,255,255,0.2);
          border: none; color: white;
          width: 28px; height: 28px; border-radius: 50%;
          cursor: pointer; font-size: 13px;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s;
        }
        .fb-close:hover { background: rgba(255,255,255,0.35); }

        .fb-body { display: flex; align-items: flex-start; gap: 14px; }

        .fb-icon {
          width: 58px; height: 58px; border-radius: 14px;
          object-fit: cover; flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          border: 2px solid rgba(255,255,255,0.4);
        }
        .fb-content { flex: 1; min-width: 0; }

        .fb-title {
          color: #fff; font-size: 15px; font-weight: 800;
          margin: 0 0 3px; line-height: 1.3;
          text-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }
        .fb-sub {
          color: rgba(255,255,255,0.9); font-size: 12.5px;
          font-weight: 600; margin: 0 0 12px; line-height: 1.45;
        }

        .fb-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #FFD700; color: #1a3a5c;
          border: none; border-radius: 10px;
          padding: 9px 18px;
          font-size: 13.5px; font-weight: 800;
          font-family: 'Nunito', sans-serif;
          cursor: pointer;
          transition: transform .15s, box-shadow .15s;
          box-shadow: 0 3px 10px rgba(255,215,0,.4);
        }
        .fb-btn:hover { background:#FFE033; transform:translateY(-1px); }
        .fb-btn:disabled { opacity:.7; cursor:not-allowed; transform:none; }

        .fb-steps {
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          padding: 10px 12px;
          display: flex; flex-direction: column; gap: 8px;
        }
        .fb-step {
          display: flex; align-items: center; gap: 10px;
          color: rgba(255,255,255,0.95);
          font-size: 12.5px; font-weight: 600; line-height: 1.4;
          margin: 0;
        }
        .fb-step-num {
          background: #FFD700; color: #1a3a5c;
          width: 22px; height: 22px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 800; flex-shrink: 0;
        }
        .fb-step strong { color: #FFD700; }

        @media (min-width: 480px) {
          .fb-banner {
            max-width: 460px; left: 50%; right: auto;
            transform: translateX(-50%); margin: 0 0 20px;
          }
          @keyframes fb-slide {
            from { transform: translateX(-50%) translateY(120%); opacity: 0 }
            to   { transform: translateX(-50%) translateY(0);    opacity: 1 }
          }
        }
      `}</style>

      <div className="fb-overlay" onClick={handleDismiss} />

      <div className="fb-banner" role="dialog" aria-label="Instalar app Feria Esperanza">

        <button className="fb-close" onClick={handleDismiss} aria-label="Cerrar">✕</button>

        <div className="fb-body">
          <img src="/logo192.png" alt="Feria Esperanza" className="fb-icon" />

          <div className="fb-content">
            <p className="fb-title">🌻 ¡Llevá la Feria en tu bolsillo!</p>

            {/* Caso A: Chrome con prompt nativo disponible */}
            {showNativeButton && (
              <>
                <p className="fb-sub">Instalá la app para acceder más rápido, sin abrir el navegador.</p>
                <button className="fb-btn" onClick={handleInstallClick} disabled={installing}>
                  {installing ? '⏳ Instalando...' : '⬇️ Instalar gratis'}
                </button>
              </>
            )}

            {/* Caso B: Android sin prompt (instrucciones manuales) */}
            {showAndroidManual && (
              <>
                <p className="fb-sub">Instalala en segundos:</p>
                <div className="fb-steps">
                  <p className="fb-step">
                    <span className="fb-step-num">1</span>
                    Tocá los <strong>3 puntitos ⋮</strong> arriba a la derecha
                  </p>
                  <p className="fb-step">
                    <span className="fb-step-num">2</span>
                    Elegí <strong>"Añadir a pantalla de inicio"</strong>
                  </p>
                  <p className="fb-step">
                    <span className="fb-step-num">3</span>
                    Tocá <strong>"Instalar"</strong> y listo 🎉
                  </p>
                </div>
              </>
            )}

            {/* Caso C: iOS Safari */}
            {showIOSInstructions && (
              <>
                <p className="fb-sub">Instalala en segundos:</p>
                <div className="fb-steps">
                  <p className="fb-step">
                    <span className="fb-step-num">1</span>
                    Tocá el ícono <strong>Compartir 📤</strong> abajo en Safari
                  </p>
                  <p className="fb-step">
                    <span className="fb-step-num">2</span>
                    Elegí <strong>"Añadir a pantalla de inicio"</strong>
                  </p>
                  <p className="fb-step">
                    <span className="fb-step-num">3</span>
                    Tocá <strong>"Añadir"</strong> y listo 🎉
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