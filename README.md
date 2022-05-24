# Observabilidade e Monitoramento

Esse projeto foi criado para armazenar os logs de uma aplicação e ter o monitoramento e observabilidade dela. Com é possível criar dashboards, gráficos, alertas entre outras funcionalidades.

## Tecnologias

* docker
* elasticsearch
* logstasg
* kibana
* grafana

### Estrutura

É usado o `Redis` para enviar os logs da aplicação e persistir em memória, até que o `logstash` leia os dados do Redis e envia para o `elasticsearch`. O `kibana` é usado para acessar os dados salvos no elastic de forma visual e simples. O `grafana` é usado para criar dashboards e monitoramento em cima dos dados armazenados.


## Rodar o projeto

Esse projeto utiliza o docker para subir toda a infraestrutura.

Antes de criar os containeres em uma nova pasta, deve - se rodar o script `pre-compose.sh`, e caso precise, dê a permissão ao arquivo antes:

```sh
sudo chmod +x pre-compose.sh
```

Assim que fizer o passo acima, suba os containeres:

```sh
docker-compose up -d
```
