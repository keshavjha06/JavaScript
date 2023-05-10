function init() {
    let firstName = "keshav"
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName()
}

init();
console.log(firstName) // firstName is not defined
 /* init() will be called by a global context & that context will call sayFirstName() (Executional Context). once done , it exits and init exits.
so firstName will not have any meaning once init() global context exits. */