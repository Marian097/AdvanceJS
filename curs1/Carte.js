class Carte{
    constructor(titluCarte, autorCarte, edituraCarte, anCarte, pretCarte)
    {
        this.titlu=titluCarte;
        this.autor=autorCarte;
        this.editura=edituraCarte;
        this.an=anCarte;
        this.pret=pretCarte;
    }

    obtineTitlu(){
        console.log(`Titlul cartii este: ${this.titlu}`);
    }

    afiseazaInfo(){
        console.log(`Detaliile cartii sunt: ${this.titlu}, ${this.autor}, ${this.pret}`)
    }

    randomIntFromInterval(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    deschidCartea()
    {
        console.log("Am deschis cartea la pagina 12")
    }
}

export{ Carte };