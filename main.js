fetch("links.json")
  .then(response => response.json())
  .then(ring => {
    const current = location.origin;
    const i = ring.indexOf(current);

    if (i !== -1) {
      const prev = ring[(i - 1 + ring.length) % ring.length];
      const next = ring[(i + 1) % ring.length];

      document.getElementById("webring").innerHTML = `
        <nav>
          <a href="${prev}">← Prev</a> |
          <a href="${next}">Next →</a>
        </nav>
      `;
    }
  });
