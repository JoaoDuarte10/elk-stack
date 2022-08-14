# !/bin/bash

echo -e " \033[0;32m Criando pasta data/ \033[0m"
mkdir data/

echo -e " \033[0;32m Criando pasta data/elasticsearch/ \033[0m"
mkdir data/elasticsearch/

echo -e " \033[0;32m Criando pasta data/grafana/ \033[0m"
mkdir data/grafana/

echo -e " \033[0;32m Dando permissão para pasta data/elasticsearch/ \033[0m"
sudo chmod +x data/elasticsearch/

echo -e " \033[0;32m Dando permissão para pasta data/grafana/ \033[0m"
sudo chmod +x data/grafana/
