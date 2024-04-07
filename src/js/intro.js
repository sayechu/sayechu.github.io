let header = document.querySelector('.h1-container');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{S_}", ms: 100 },
    { t: "{SA_}", ms: 100 },
    { t: "{SAN_}", ms: 100 },
    { t: "{SANT_}", ms: 100 },
    { t: "{SANTI_}", ms: 100 },
    { t: "{SANTI A_}", ms: 100 },
    { t: "{SANTI AY_}", ms: 100 },
    { t: "{SANTI AYE_}", ms: 100 },
    { t: "{SANTI AYEC_}", ms: 100 },
    { t: "{SANTI AYECH_}", ms: 100 },
    { t: "{SANTI AYECHU_}", ms: 100 },
    { t: "{SANTI AYECHU }", ms: 200 },
    { t: "{SANTI AYECHU_}", ms: 200 },
    { t: "{SANTI AYECHU }", ms: 200 },
    { t: "{SANTI AYECHU_}", ms: 200 },
    { t: "{SANTI AYECHU}", ms: 200 },
    { t: "{SANTI AYECHU}", ms: 200 }
];
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms);
    else {
        header.classList.add('top');
        showElements();
    }
}
update();

let showElements = () => {
    let vantaJS = document.querySelector('#vanta');
    vantaJS.hidden = false;
    effect.resize();
}