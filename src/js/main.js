/* ==========================================================================
   The Dao of Effortless Drawing — Main JS
   FAQ accordion, module toggles, affiliate pass-through, copyright year
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Copyright year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;

      // Close all others
      document.querySelectorAll('.faq__question').forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.setAttribute('data-open', 'false');
      });

      // Toggle current
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        answer.setAttribute('data-open', 'true');
      }
    });
  });

  /* ---------- Module Card Toggles ---------- */
  document.querySelectorAll('.module-card__toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const details = btn.nextElementSibling;

      btn.setAttribute('aria-expanded', String(!expanded));
      details.setAttribute('data-open', String(!expanded));
    });
  });

  /* ---------- Affiliate Ref Pass-Through ---------- */
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  if (ref) {
    document.querySelectorAll('a[data-enroll]').forEach(link => {
      const url = new URL(link.href, window.location.origin);
      url.searchParams.set('ref', ref);
      link.href = url.toString();
    });
  }

  /* ---------- Smooth Scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
