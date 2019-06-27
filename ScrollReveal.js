//Place the below in the head tag:

<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>  

//In the code below, the #about, #services, #projects & #contact are the section IDs of my website. 
//Duration is in milliseconds, origin determines which direction element appears from, & distance is distance element will be revealed from. 

<script>
window.sr = ScrollReveal();
sr.reveal('#about div', {
duration: 1500,
origin: 'left',
distance:'300px'
});
sr.reveal('#services div', {
duration: 1500,
origin: 'right',
distance:'300px'
});
sr.reveal('#projects div', {
duration: 1500,
origin: 'left',
distance: '300px'
});
sr.reveal('#contact div', {
duration: 1500,
origin: 'bottom',
distance: '600px'
});
</script>
