(function () {
  const form = document.getElementById("whatsappForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const message = document.getElementById("message").value.trim();
    const consentement = document.getElementById("consentement").checked;

    if (!consentement) {
      alert("Vous devez accepter le consentement pour continuer.");
      return;
    }

    const texte = 
`Bonjour, je souhaite prendre un rendez-vous physique avec Impact Local.
Nom : ${nom}
Téléphone : ${telephone}
Message : ${message}`;

    const numero = "963 954 797 519"; // ex: 5215512345678
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;

    window.open(url, "_blank");
  });
})();