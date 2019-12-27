**********************************************  
**********************************************


			*** GRAACZOK - API INTEGRADA COM O OBJETIVO DE FACILITAR A CAPTAÇÂO DE DOAçÃO E DADOS PARA INSTITUIÇÕES ***

	O sistema pode ser integrado a e-commercer's de parceiros da instituição, onde terá como objetivo exibir ao final das compras do cliente um modal com a promoção em troca da contribuição ao GRAACC. Ao clicar no botão "Doar" o cliente é redirecionado a pagina de doação do GRAACC. Em paralelo sua intenção de doação é salva em um banco de dados, com suas respectivas informações, visto que mesmo que a doação não seja concluída o usuário poderá ser um futuro contribuidor.
	Caso a contribuição se cumpra, será gerado um cupom de vantagem para uma proxima compra no site do patrocinador.
	
	Para que o banner de redirecionamento e captação seja apresentado, deve ser inserido na pagina do parceiro o codigo presente no diretorio "modal-cliente".
	O botão presente no modal efetua o submit de um formulario do tipo "hidden", neste formulário o parceiro deverá disponibilizar as informções necessárias para utilização do serviço, das quais são: Nome do cliente, e-mail, CPF, RG e ID do parceiro.

	Caso a intenção de doação se concretize, será gerado um cupom de vantagem para utilização no e-commerce do parceiro do qual nos redirecionou.
	
	PS. Atualmente, vis a necessidade do GRAACC, a validação da doação é feita de maneira manual, contudo todo processo pode ser automatizado.




========================================================================
**HACKATHON GRAAC**
========================================================================

Parabens!!! 


**HACKATHON GRAAC**
========================================================================

Parabens!!!

Sua equipe esta participando do Hackathon beneficiente para a Graac!


Foi disponibilizado um ambiente de desenvolvimento onde o acesso deverá ser 
realizado através da VPN.


**Seus dados de acesso são:**

    IP:         172.31.10.104
    USUÁRIO:    ubuntu
    SENHA:      N9sdhpi2Dhn2
    
    Para acesso externo à sua API desenvolvida, utilize o endereço: http://52.53.213.138



Você possui permissão de root (Administrador), para isso execute:

**$** sudo su -



Voce pode desenvolver utilizando os recursos abaixo:
========================================================================
- PHP 7.2.24
- Java 8 (OpenJDK 1.8.0)
- NodeJS v8.10.0
- Python 3.6.9
  > Obs.: Utilizar o comando "pip3"
- Python 2.7.15+
  > Utilizar o comando "pip"
- Docker / Docker Compose
- Maven

Banco de dados
========================================================================
Como acessar o client do Postgres:

    $ sudo -i -u postgres
    $ psql

Como acessar o client do MySQL:

    $ mysql -u root -p
    SENHA: N9sdhpi2Dhn2
    Acesso Web: http://<IP_AMBIENTE>/phpmyadmin/

Como acessar o client do mongodb:

    $ mongo --eval 'db.runCommand({ connectionStatus: 1 })'

Como acessar o Elasticsearch:

    $ curl -u elastic:changeme -XGET 'http://localhost:9200/'
    Usuário: elastic     Senha: changeme
