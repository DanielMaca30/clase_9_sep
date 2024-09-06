const personajeDeReparto = {
    nombre: "el tio Benito",
    mensajeDelTioFuncion: function (mensaje) {
        console.log(`${this.nombre} dijo: $(mensaje)`);
    },
    mensajeConFuncionFlecha: (mensaje) => {
        console.log(`${this.nombre} tambien dijo: ${mensaje}`);
    }
};
personajeDeReparto.mensajeDelTioFuncion("con un gran poder, una gran responsabilidad!");
personajeDeReparto.mensajeConFuncionFlecha("pilas con el doctor octopus!");
