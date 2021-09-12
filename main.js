let btn = document.getElementById("btn");
let output = document.getElementById("output");
let question = [
  "Wer sind Ihre „Kollegen“ in der Freizeit? (Lebenspartner, Mitbewohner, Geschwister, Eltern, Haustiere)",
  "Wie haben sich Ihre Arbeitszeiten im Homeoffice verändert?",
  "Was darf bei Ihrer Arbeit von Zuhause nicht fehlen?",
  "An welchem Ort in Ihrem Zuhause sind Sie am produktivsten?",
  "Wie würden Sie Ihren Arbeitsplatz bei sich zuhause gestalten, wenn Geld keine Rolle spielt?",
  "Was war als Kind Ihre Lieblings-Sportart?",
  "Haben Sie Geschwister? Sind Sie das älteste, mittlere oder jüngste Kind?",
  "Wo sind Sie aufgewachsen?",
  "Waren Sie als Kind in einem Sportverein?",
  "Sprechen Sie noch weitere Sprachen?",
  "An welchem Ort verbringen Sie am liebsten Ihre Zeit?",
  "Was war Ihr aller erster Job?",
  "Welche Zeichentrickserie haben Sie als Kind am liebsten geschaut?",
  "Wer war Ihr Lieblingscharakter aus einer Zeichentrickserie? Wenn Ihr Lieblingscharakter nicht aus Ihrer Lieblingsserie stammt, warum?",
  "Wer hat in Ihrem Leben den größten Einfluss auf Sie gehabt?",
  "Welchen Ratschlag Ihrer Eltern oder Großeltern möchten Sie gerne weitergeben?",
  "Was war Ihr Lieblingsfach in der Schule?",
  "Hatten Sie als Kind einen imaginären Freund? Wie war er oder sie?",
  "Hat man Sie schon einmal mit einer Berühmtheit verglichen?",
  "Welchen Hintergrund haben Sie gerade auf Ihrem PC/Handy? Warum haben Sie sich dafür entschieden?",
  "Wenn Sie Ihrem Auto einen Namen geben müssten, wie würden Sie es nennen?",
  "Erzählen Sie uns einen Witz.",
  "Wenn Sie der Moderator einer Talkshow wären, welche Show würden Sie am liebsten moderieren?",
  "Was war Ihr bestes und welches Ihr schlechtestes Halloween-Kostüm?",
  "Erzählen Sie uns von einem peinlichen Erlebnis.",
  "In welcher Situation haben Sie das letzte Mal Ärger bekommen?",
  "Wie würde der Titel Ihrer Autobiografie lauten?",
  "Wenn Sie ein Wort in ein Wörterbuch aufnehmen könnten, welches wäre es und was wäre seine Bedeutung?",
  "Wenn Sie bis zu Ihrem Lebensende wie ein Cartoon-Charakter reden müssten, für welchen würden Sie sich entscheiden?",
  "Was war der schlechteste Ratschlag, den Sie je erhalten haben?",
  "Wenn Sie einen Wachsmalstift essen müssten, für welche Farbe würden Sie sich entscheiden?",
  "Haben Sie ein Lieblingslied?",
  "Welches war das beste Konzert, auf dem Sie je waren?",
  "Welches Buch oder Objekt würden Sie auf eine einsame Insel mitnehmen?",
  "Wenn Sie mit einer historischen Persönlichkeit zu Abend essen könnten, wer wäre es?",
  "Was war das schönste Geschenk, das Sie jemals bekommen haben? Und das schönste, das Sie jemals verschenkt haben?",
  "Haben Sie ein verborgenes Talent?",
  "Was wollten Sie werden, als Sie klein waren?",
  "Wenn Sie drei Wünsche frei hätten, was würden Sie sich wünschen?",
  "Welche Interessen haben Sie neben Ihrer Arbeit?",
  "Wenn Sie eine Stunde mehr am Tag hätten, was würden Sie damit anfangen?",
  "Sind Sie eher ein Hunde- oder Katzenmensch oder beides?",
  "Welchen Wunsch würden Sie sich gerne erfüllen, bevor Sie sterben?",
  "Welche Gameshow könnten Sie gewinnen?",
  "Wenn Sie nur ein Emoji für den Rest Ihres Lebens benutzen könnten, welches wäre es?",
  "Haben Sie ein Lieblings-Filmzitat?",
  "Was ist Ihrer Meinung nach völlig überbewertet?",
  "Stellen Sie sich vor, Sie wären Profisportler. Welche Musik würde im Hintergrund spielen, wenn Sie das Spielfeld betreten?",
  "Welches Buch würden Sie am liebsten erneut zum ersten Mal lesen?",
  "Welcher Film sollte Ihrer Meinung nach eine Fortsetzung bekommen?",
  "Wenn Sie dem CEO ein Emoji schicken müssten, welches wäre es?",
  "Was war das Erste, woran Sie heute Morgen gedacht haben?",
  "Welcher war der bisher schönste Tag in Ihrem Leben?",
  "Mit wem sollten Aliens als Erstes sprechen, wenn sie auf der Erde landen?",
  "Ist ein Hotdog ein Sandwich?",
  "Haben Sie schon einmal in einem anderen Land gelebt?",
  "Berge oder Strand?",
  "Schnee oder Sand?",
  "Wenn Sie in ein anderes Land ziehen müssten, wo würden Sie leben wollen?",
  "Womit muss Ihre Pizza belegt sein?",
  "Was trinken Sie am liebsten zur Happy Hour?",
  "Wie würden Sie Ihren eigenen Cocktail nennen?",
  "Welches ist Ihr Lieblings-Schnellrestaurant?",
  "Haben Sie schon einmal ein Gericht zu schätzen gelernt, das Sie normalerweise niemals angerührt hätten?",
  "Wären Sie lieber ein Mitglied der Avengers oder der Justice League?",
  "Hätten Sie lieber eine „Begleitmusik“ für Ihr Leben oder eine ständige wahllose Hintergrundmusik?",
  "Wenn Sie in einem Videospiel leben müssten, welches wäre es?",
  "Wenn Sie ein Wort aus dem Wörterbuch entfernen könnten, welches wäre es?",
  "Wenn Sie ein Tier sein könnten, welches wäre es?",
  "Wenn Sie ein Element (Luft, Wasser, Erde, Feuer) beherrschen könnten, für welches würden Sie sich entscheiden?",
  "Wenn Sie in einem Disney-Film leben müssten, welchen würden Sie wählen?",
  "Wenn Sie eine Botschaft an die gesamte Welt senden könnten, was würden Sie der Menschheit mitteilen?",
  "Sie haben nur noch 20 Minuten, bis eine Zombie-Apokalypse beginnt. Wie bereiten Sie sich vor?",
  "Welche Angewohnheit haben Sie, die andere Menschen als sonderlich bezeichnen würden?",
  "Was wollten Sie schon immer einmal tun, sind aber noch nicht dazu gekommen? Warum nicht?",
  "Wann haben Sie das letzte Mal etwas zum ersten Mal gemacht?",
  "Was hat Sie beim Bereisen eines anderen Landes am meisten überrascht?",
  "Erzählen Sie uns etwas über sich selbst, was die meisten Menschen in Ihrem Umfeld überraschen würde?",
];

btn.addEventListener("click", function () {
  var randomQuestion = question[Math.floor(Math.random() * question.length)];
  output.innerHTML = randomQuestion;
});

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
