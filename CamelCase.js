function toCamelCase(str){
    const SemPrimeiraLetra = str.slice(1)
    
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
toCamelCase('Testando')