
    const findMe = document.querySelector("#findMe");
    const textBox = document.querySelector("#text-box");
    const textFrame = document.querySelector("#text-frame");

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error);
        }
        else{
            textBox.innerHTML = "Geolocation not supported";
        }
    }

    function success(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const zoom = 8;

        textBox.innerHTML = `
            <div class="space-y-1">
                <h1><b>Latitude:</b> ${latitude}</h1>
                <h1><b>Longitude:</b> ${longitude}</h1>
            </div>
        `;

        textFrame.innerHTML = `
            <iframe 
                class="w-full h-[400px] rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5987.960068668214!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f${zoom}!5e0!3m2!1sru!2s!4v1764482776389!5m2!1sru!2s"
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `;
    }

    function error(){
        textBox.innerHTML = `<span class="text-red-500">Permission denied or location unavailable.</span>`;
    }

    const typed = new Typed('#element', {
      strings: [
        'Where am I?',
        'Track my loctaion',
        'Find me'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true
    });