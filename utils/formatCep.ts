export function cepForm(cep:string) {
    let formatCep = cep.replace(/\D/g, "");
    formatCep = formatCep.replace(/^(\d{2})(\d)/, '$1.$2');
    formatCep = formatCep.replace(/\.(\d{3})(\d)/, '.$1-$2');

    const cepLength = cep.length;

    if (cepLength > 10) {
        formatCep = formatCep.substring(0, cepLength - 1);
    }
    
    return cepForm;
}