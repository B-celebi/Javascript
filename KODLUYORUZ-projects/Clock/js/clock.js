let input = prompt("Adınız nedir?");

//Eğer Girilen İsim String Değilse Hata Verecek Bir If.
if (Number.isNaN(parseInt(input))) {
    let myname = document.querySelector("span#myName");

    //Eğer İsim Boş Bırakılırsa :)
    if (input == "") {
        myname.textContent = "İsimsiz :)"
    } else {
        myname.textContent = input;
    }

    const clock = document.querySelector("div#myClock");

    //Saat Fonksiyonu
    function saatGuncel() {
        const date = new Date();
        let gun = date.getDay();
        const saat = date.getHours();
        const dakika = date.getMinutes();
        const saniye = date.getSeconds();
        switch (gun) {
            case 0:
                gun = "Pazar";
                break;
            case 1:
                gun = "Pazartesi";
                break;
            case 2:
                gun = "Salı";
                break;
            case 3:
                gun = "Çarşamba";
                break;
            case 4:
                gun = "Perşembe";
                break;
            case 5:
                gun = "Cuma";
                break;
            case 6:
                gun = "Cumartesi";
                break;
        }
        // Saat Bilgisi İçerik Değiştirme
        clock.innerHTML = `${saat}:${dakika}:${saniye} ${gun}`;
    }

    //Saatin Sürekli Güncellenmesi İçin setInterval Metodu Kullanımı.
    setInterval(saatGuncel, 1000);

}
else {
    alert("Lütfen isminizi doğru giriniz");
    document.body.classList.add("hata");
    document.body.innerHTML = "<h1>HATA</h1>";
}

