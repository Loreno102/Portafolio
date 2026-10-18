// Reproductor a pantalla completa (con sonido) compartido por toda la página

export function openPlayer(src: string, title = '') {
  const dlg = document.getElementById('player') as HTMLDialogElement | null;
  if (!dlg) return;
  const video = dlg.querySelector('video')!;
  dlg.querySelector('.player-title')!.textContent = title;
  video.src = src;
  dlg.showModal();
  video.play().catch(() => {});
}

export function initPlayer() {
  const dlg = document.getElementById('player') as HTMLDialogElement | null;
  if (!dlg) return;
  const video = dlg.querySelector('video')!;
  dlg.addEventListener('close', () => {
    video.pause();
    video.removeAttribute('src');
    video.load();
  });
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg) dlg.close();
  });
  dlg.querySelector('.player-close')!.addEventListener('click', () => dlg.close());

  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-play-src]');
    if (!el) return;
    e.preventDefault();
    openPlayer(el.dataset.playSrc!, el.dataset.playTitle);
  });
}
