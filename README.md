# 🍅 Pomodoro Timer

Timer **Pomodoro** em React com TypeScript: alterna automaticamente entre ciclos de trabalho e descanso, toca um som em cada troca e mostra as estatísticas da sessão.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)


## ✨ Funcionalidades

- 25 min de trabalho, 5 min de descanso curto e 15 min de descanso longo a cada 4 ciclos
- Botões para **trabalhar**, **descansar** e **pausar/retomar**
- **Sons** de início e fim de cada etapa
- Cor da tela muda entre trabalho e descanso
- Estatísticas: ciclos concluídos, tempo total trabalhado e quantidade de pomodoros

## 🧱 Destaques do código

- **Hook personalizado** `useInterval` para controlar o relógio sem vazamento de `setInterval`
- Funções utilitárias tipadas para formatar o tempo (`secondsToMinutes`, `secondsToTime`, `zeroLeft`)
- Tempos e ciclos configuráveis por props no componente `PomodoroTimer`
- Padronização com ESLint + Prettier e `.editorconfig`

## 🚀 Como rodar

```bash
git clone https://github.com/LucianoMachadoS/typescript-react-pomodoro.git
cd typescript-react-pomodoro
npm install
npm start
```

---
Projeto desenvolvido no curso [JavaScript e TypeScript do básico ao avançado](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) (Luiz Otávio Miranda, Udemy).
Feito por [Luciano Machado](https://github.com/LucianoMachadoS) · [LinkedIn](https://www.linkedin.com/in/luciano-machado-9253a1265/)
