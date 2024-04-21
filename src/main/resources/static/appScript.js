const navnValidering = /^[A-Za-z]+$/;
const telefonValidering = /^[0-9]{8}$/;
const epostValidering = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//"epostRegex" er hentet fra: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/

$("#kjop").click(function() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epost = $("#epost").val();
    
    const feil = validering(film, antall, fornavn, etternavn, telefon, epost);

    if (!feil) {
        alert("Feil ved kjøp av billett, se felter med feilmelding");
    } else {
        console.log("Billett:", billett);
        $.post("/lagre", billett, function (data) {
            // Handle response if needed
        });

        // Reset form fields
        $("input[type='text']").val("");
    }
});

function validering(film, antall, fornavn, etternavn, telefon, epost){
    let feil = false;

    if (antall === ""){
        $("#antallError").html("Skriv inn ett heltall");
        feil = true;
    } else {
        $("#antallError").html("");
    }

    if (film === ""){
        $("#filmError").html("Feil ved input av film");
        feil = true;
    } else {
        $("#filmError").html("");
    }

    if (fornavn === "" || !navnValidering.test(fornavn)){
        $("#fornavnError").html("Feil ved input av fornavn");
        feil = true;
    } else {
        $("#fornavnError").html("");
    }

    if (etternavn === "" || !navnValidering.test(etternavn)){
        $("#etternavnError").html("Feil ved input av etternavn");
        feil = true;
    } else {
        $("#etternavnError").html("");
    }

    if (telefon === "" || !telefonValidering.test(telefon)){
        $("#telefonError").html("Feil ved input av telefon nummer");
        feil = true;
    } else {
        $("#telefonError").html("");
    }

    if (epost === "" || !epostValidering.test(epost)){
        $("#epostError").html("Feil ved input av epost");
        feil = true;
    } else {
        $("#epostError").html("");
    }

    return feil;
}