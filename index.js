var mini = true;

function toggleNavbar() {
    //Drops down the navbar//

    if (mini) {
        console.log("opening navbar");

        document.getElementById("navbarDropdown").style.height = "30px"; //Grow the navbar.

        this.mini = false;
    } else {
        console.log("closing navbar");

        document.getElementById("navbarDropdown").style.height = "0px"; //Shrink the navbar.

        this.mini = true;
    }
}

function openNavbar() {
    document.getElementById("navbarDropdown").style.height = "30px"; //Grow the navbar.
    this.mini = false;
}