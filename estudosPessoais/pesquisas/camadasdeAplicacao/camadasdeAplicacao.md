# camadas de aplicação
#####  explicando o modelo OSI

o **Modelo de interconexão de sistemas abertos ** (Open systems interconnection, osi ) é uma estrutura que descreve as funções de um sitema de rede . o modelo OSI categoriza as funções de computação dos diferentes componentes de rede, descrevendo as regras e os requisitos necessarios para suportar a as diversas formas de diferentes sistemas diferentes trabalharem juntos e em harmonia. tanto de hardware como de software que compõem a rede.

Além de entender qual é o modelo OSI, observe que as camadas do modelo OSI são particulamente úteis ao visualizar o fluxo de dados do remetente para o receptor . As descrições dos vários níveis, bem como sua interdependência, facilitam a indentificação de problemas de rede. Além disso, os programadores podem usar o modelo osi para entender melhor como os dados chegam e saem de seus aplicativos ou para escrever código específico para o uso em determinidados níveis. 

nas seções a seguir, você verá o modelo OSI explicado

------------

## Quais são as sete camadas do modelo OSI ?

Há sete camadas de abstração que compõe o modelo OSI. A comunicação de uma pessoa para a outra vai da camada 7 para a camada 1. cada camada executa um trabalho especifico.
[![as 7 camadas do modelo OSI](https://cf-assets.www.cloudflare.com/slt3lc6tev37/6ZH2Etm3LlFHTgmkjLmkxp/59ff240fb3ebdc7794ffaa6e1d69b7c2/osi_model_7_layers.png "as 7 camadas do modelo OSI")](http://https://cf-assets.www.cloudflare.com/slt3lc6tev37/6ZH2Etm3LlFHTgmkjLmkxp/59ff240fb3ebdc7794ffaa6e1d69b7c2/osi_model_7_layers.png "as 7 camadas do modelo OSI")

------------

##### Camada 7
###### A camada de aplicação

A camada de aplicação é a mais próxima do usuário final. ele inicia a comunicação entre o usuario e os aplicativos com os quais ele interage pessoalmente. nesta camada, os dados são traduzidos da sintaxe em que foram convertidos em algo que o usuário possa ler.

 Exemplos de aplicativos de camada 7 incluem um navagador da web como o chrome ou um aplicativo de e-mail . a camada 7 também pode identificar parceiros de comunicação, verificar quais recursos estão disponiveis e garantir que a comunicação esteja devidamente sincronizada

------------

##### Camada 6
###### A camada de apresentação
A camada de apresentação cuida de preparar os dados para a camada de aplicativo. Os dois dispositivos que estão se comunicando podem usar métodos diferentes de codificação de seus dados. A camada 6, portanto, transforma os dados de entrada em algo que pode ser lido na camada do aplicativo. Isso inclui criptografar e descriptografar dados.
A camada de apresentação também comprime os dados quem vêm da camada de aplicativo antes de enviá-los para a camada 5, a camada de sessão.

##### Camada 5
###### A camada de sessão
A camada de sessão lifa com a abertura e o fechamento das comunicações de rede entre dois dispositivos de interação. A "sessão" refere-se ao tempo entre a abertura e o fechamento da interação. A camada de sessão garante que a sessão esteja aberta por um periodo de tempo suficiente para que todos os dados necessários sejam enviados. Em seguida, a camada de sessão fecha a sessão para evitar gastos de recursos desnecessários.
Além disso, ele sincroniza a transferencia de dados. se uma grande quantidade de dados estiver sendo enviada, a camada de sessão pode configurar pontos de verificação. Se a transmissão for interrompida antes que todos os dados sejam baixados, os pontos de verificação permitem que a seja reiniciada sem que ela comece novamente 
##### Camada 4
###### A camada de transporte 

A camada de transporte lida com a comunicação de ponta a ponta entre os dispositivos que interagem entre si. O gerenciamento da comunicação envolve pegar dados 

##### Camada 3
###### A camada de rede
##### Camada 2
###### A camada de link de dados
##### Camada 1
###### A camada fisica




