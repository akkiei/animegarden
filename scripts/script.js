function openpage(pagename, btn_grp_id) {
    var i;
    var x = document.getElementsByClassName("page");
    const btn_grp = document.getElementById(btn_grp_id).children;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    for (i = 0; i < btn_grp.length; i++) {
        btn_grp[i].classList.replace('bg', 'btn-default');
    }
    document.getElementById(pagename).style.display = "block";
    document.getElementById(`${pagename}_btn`).classList.replace('btn-default', 'bg') //"#ff8000";
}

function btnpress() {
    w3.toggleClass('.fa', 'fa-toggle-on', 'fa-solid fa-toggle-off')
}

function tgl_anime() {
    w3.hide('.toggle-anime')
    w3.show('.toggle-movie')
}

function tgl_movie() {
    w3.hide(".toggle-movie")
    w3.show('.toggle-anime')
}