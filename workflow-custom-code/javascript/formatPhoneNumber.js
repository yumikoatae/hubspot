/*
Property to include in code
phone - Phone Number
*/

// Função para formatar números de telefone
const formatPhoneNumber = phoneNumber => {
    // Remover caracteres não numéricos usando expressão regular
    const cleaned = phoneNumber.replace(/\D/g, '');

    // Verifica se o número limpo tem um comprimento válido para formatação
    if (cleaned.length === 8) {
        const countryCode = "55"; 
        const areaCode = "00";    
        const firstPart = cleaned.substring(0, 5); 
        const secondPart = cleaned.substring(5);   
        return `${countryCode}${areaCode}${firstPart}${secondPart}`;
    }

    if (cleaned.length === 9) {
        const countryCode = "55"; 
        const areaCode = "00";    
        const firstPart = cleaned.substring(0, 6); 
        const secondPart = cleaned.substring(6);   
        return `${countryCode}${areaCode}${firstPart}${secondPart}`;
    }

    if (cleaned.length === 10) {
        const countryCode = "55";              // Código do país (Brasil)
        const areaCode = cleaned.substring(0, 2); // Código de área
        const firstPart = cleaned.substring(2, 6); // Primeira parte do número
        const secondPart = cleaned.substring(6);   // Segunda parte do número
        return `${countryCode}${areaCode}${firstPart}${secondPart}`;
    }

    if (cleaned.length === 11) {
        const countryCode = "55";              
        const areaCode = cleaned.substring(0, 2); 
        const firstPart = cleaned.substring(2, 7); 
        const secondPart = cleaned.substring(7);   
        return `${countryCode}${areaCode}${firstPart}${secondPart}`;
    }

    if (cleaned.length === 12) {
        const countryCode = cleaned.substring(0, 2); 
        const areaCode = cleaned.substring(2, 4);    
        const firstPart = cleaned.substring(4, 8);   
        const secondPart = cleaned.substring(8);     
        return `${countryCode}${areaCode}${firstPart}${secondPart}`;
    }

    if (cleaned.length === 13) {
        const countryCode = cleaned.substring(0, 2); 
        const areaCode = cleaned.substring(2, 4);    
        const firstPart = cleaned.substring(4, 9);  
        const secondPart = cleaned.substring(9);     
        return `${countryCode}${areaCode}${firstPart}${secondPart}`;
    }

    // Se o número não se encaixa nos padrões esperados, lança um erro
    throw new Error('Número de telefone inválido ou não suportado para formatação');
}


exports.main = async (event, callback) => {
    try {
        const phoneNumber = event.inputFields.phone; // Obtém o número de telefone do evento de entrada
        console.log(phoneNumber); // Exibe o número de telefone no console
        console.log(typeof(phoneNumber)); // Exibe o tipo do número de telefone no console

        const formattedPhoneNumbers = formatPhoneNumber(phoneNumber); // Formata o número de telefone
        console.log(formattedPhoneNumbers); // Exibe o número de telefone formatado no console
        console.log(typeof(formattedPhoneNumbers)); // Exibe o tipo do número de telefone formatado no console
    
        // Chama a função de retorno com os campos de saída formatados
        callback({
            outputFields: {
                formattedPhoneNumbers,
            }
        });
    } catch (error) {
        // Se ocorrer um erro, registra o erro e chama o callback com o erro
        console.error('Erro ao formatar número de telefone:', error.message);
        callback({
            error: 'Erro ao formatar número de telefone',
        });
    }
}

/*
Data outputs
String - formattedPhoneNumbers
*/