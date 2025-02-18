# DevOps-Pipeline

Dieses Repository entstand im Zusammenhang mit dem Modul IT-Management DevOps.
Es wird eine klassische Kalender Web-Applikation nach den DevOps Prinzipien entwickelt.

Die GitHub Actions Pipeline spielt dabei eine zentrale Rolle.
Die sogenannten Workflows liegen im Ordner ".github/workflows".

Der letzte Status der Pipeline ist:

![Workflow Status](https://github.com/PassiSchoppi/DevOps-Pipeline/actions/workflows/github-actions-pipeline.yml/badge.svg)


## Abhängigkeiten installieren

cd .\devops-pipeline\
npm i


## Dev Server starten

cd .\devops-pipeline\
npm run dev

## Prod Server

npm run build
npm run start

## Linter

npm run lint