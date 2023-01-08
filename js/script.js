// creo un array
const data = [
    {
        id: '1',
        name: 'Giacomo Poretti',
        data: '11/07/2022',
        profilePick: 'http://www.leultime20.it/wp-content/uploads/2012/11/G.-Poretti-X-Leultime20-264x300.jpg',
        text: 'Tre uomini e una gamba, il nostronuovo film fuori ovunque. In collaborazione con Marina Massironi. Ci vediamo presto tutti in sala.',
        postPick: 'https://scontent.fflr3-2.fna.fbcdn.net/v/t1.18169-9/11702761_10155742878835304_8540587498500766947_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=72A6ND5XUGwAX9wXzcE&_nc_ht=scontent.fflr3-2.fna&oh=00_AfAcEto5lLyO3DpaMH8GfxszRHqgW28ro-0HxnkTnYehTA&oe=63E2550C',
        like: '5.123'
    },
    {
        id: '2',
        name: 'Giovanni Storti',
        data: '11/07/2022',
        profilePick: 'https://www.agidi.it/upload/artisti/imgslide/16/thumbnail/GDX_%C2%A9Giovanni%20De%20Sandre_6554_500X500.jpg',
        text: 'Tre uomini e una gamba, il nostronuovo film fuori ovunque. In collaborazione con Marina Massironi. Ci vediamo presto tutti in sala.',
        postPick: 'https://i.ytimg.com/vi/hOElJcaUwl0/maxresdefault.jpg',
        like: '4.850'
    },
    {
        id: '3',
        name: 'Aldo Baglio',
        data: '11/07/2022',
        profilePick: 'https://scontent.fflr3-1.fna.fbcdn.net/v/t1.6435-9/167649586_284033116503985_3787320778663774445_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lFM51ER9zWkAX-r95e1&_nc_ht=scontent.fflr3-1.fna&oh=00_AfBrZrb7KLAC7rfNvggWUD-3HgoimYBzEKOgZT-eOQj6tw&oe=63E25FB8',
        text: 'Tre uomini e una gamba, il nostronuovo film fuori ovunque. In collaborazione con Marina Massironi. Ci vediamo presto tutti in sala.',
        postPick: 'https://www.lascimmiapensa.com/wp-content/uploads/2019/07/tre-uomini-e-una-gamba-Cop.jpg',
        like: '4.752'
    },
    {
        id: '4',
        name: 'Fulminacci',
        data: '11/05/2022',
        profilePick: 'https://i.scdn.co/image/ab6761610000e5ebe983c32020eea334ecfbe7de',
        text: '"è tutto inutile" il mio nuovo singolo fuori ovunque. 11 Gennaio 2023 ⚡️.',
        postPick: 'https://i0.wp.com/endofacentury.it/wp-content/uploads/2023/01/FULMINACCI-TUTTO-INUTILE-COVER-BENDO.jpg?fit=1024%2C1024&ssl=1',
        like: '10.560'
    },
    {
        id: '5',
        name: 'Valerio Lundini',
        data: '11/03/2022',
        profilePick: 'https://personefamose.it/wp-content/uploads/2021/05/valerio-lundini.jpg',
        text: 'Se interessasse a qualcuno dal 23 novebre riprendera la terza stagione di "UNA PEZZA DI LUNDINI",  in prima serata ogni mercoledì su rai 2.',
        postPick: 'https://www.raiplay.it/cropgd/1440x810/dl/img/2022/03/25/1648208475726_2048x1152.jpg',
        like: '23.000'
    },
    {
        id: '6',
        name: 'Goku',
        data: '11/01/2022',
        profilePick: 'https://i.pinimg.com/736x/a0/34/4d/a0344df4339a0ec92aacfb635e1399ff.jpg',
        text: 'SONO IL PIù POTENTE',
        postPick: 'https://images.everyeye.it/img-notizie/dragon-ball-z-goku-majin-bu-disegnati-stile-giapponese-tradizionale-fan-v3-583398-1280x960.webp',
        like: '10.000.000'
    },
    ]

// prendo l'elemento in pagina
const social = document.getElementById('fake-social')
data.forEach(element => {
   // prendo ogni elemento dell'aray 
    const {id ,name, data, profilePick, text, postPick, like} = element;

    //stampo in pagina 
    social.innerHTML += `
    <div id="container" class="posts">
        <div class="post">
          <div>
            <div class="post-profile">
              <div class="post-icon">
                <img class="p-pic" src="${profilePick}" alt="${name}" />
              </div>
              <div>
                <p>${name}</p>
                <p class="date">${data}</p>
              </div>
            </div>
          </div>
          <div class="post-text">
            ${text}
          </div>
          <div class="post-image">
            <img src="${postPick}" alt="" />
          </div>
          <div>
            <div class="like">
              <div>
                <button class="like-btn" href="#">
                  <p>Mi Piace</p>
                </button>
              </div>
              <div class="likes-counter">Piace a <span>${like}</span> persone</div>
            </div>
          </div>
        </div>
      </div>
    `    
});