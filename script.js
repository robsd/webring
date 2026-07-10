fetch("links.json")
  .then(response => response.json())
  .then(ring => {
    const current = location.origin;
    const i = ring.indexOf(current);

    if (i !== -1) {
      const prev = ring[(i - 1 + ring.length) % ring.length];
      const random = ring[Math.floor(Math.random() * ring.length)];
      const next = ring[(i + 1) % ring.length];

      document.getElementById("webring").innerHTML = `
        <p>Part of <a href="https://robsd.github.io/webring">RD's Webring</a> 😎</p>
        <nav>
          <a href="${prev}">← Prev</a> |
          <a href="${random}">Random</a> |
          <a href="${next}">Next →</a>
        </nav>
      `;
    }
  });
