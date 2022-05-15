const avatar = 'https://cdn.discordapp.com/avatars/836663939609657385/5ae58d36732d78c18878080e4b1ab24e';

(function() {
    /* Dynamic Avatar */
    document.getElementById("dyn-avatar").setAttribute("src", avatar)
    /* Static Avatar */
    document.getElementById("st-avatar").setAttribute("href", avatar + '.png')
})()