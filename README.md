# Les tests unitaires

## Installation du projet

```
npm install // Installer les dépendances
npm test // Permet d'éxecuter les tests unitaires
npm start // Permet d'éxecuter le code
```

## Contexte

Ce projet est un entrainement au test unitaire, il permet de comprendre et de s'exercer au différent concept concernant les tests unitaires.

## Les termes

### Regression : 

La régression est un phénomène qui peut se produire lorsqu'une modification apportée à un logiciel entraîne une défaillance dans une autre partie du logiciel qui fonctionnait auparavant de manière appropriée. Dans le contexte des tests unitaires, la régression peut survenir lorsqu'une modification apportée au code source d'une application provoque l'échec d'un ou plusieurs tests unitaires qui étaient précédemment écrits et qui passaient.

Les tests unitaires jouent un rôle important dans la détection de la régression en exécutant automatiquement les tests pour vérifier que le code continue de fonctionner correctement, même après des modifications. Si un test échoue, cela peut indiquer une régression et un dysfonctionnement potentiel dans le logiciel.

---

### Refactorisation : 

La refactorisation est le processus de modification du code source d'une application sans changer son fonctionnement externe. Elle peut être effectuée pour améliorer la qualité du code, le rendre plus lisible et plus facile à maintenir.

Dans le contexte des tests unitaires, la refactorisation est un processus crucial pour garantir la qualité du code, car elle permet de mettre à jour le code pour le rendre plus clair, plus facile à comprendre et plus facile à maintenir. Elle peut également permettre de corriger des bugs et de prévenir les régressions futures.

Lors de la refactorisation, il est important d'exécuter les tests unitaires pour vérifier que les modifications apportées au code ne provoquent pas de dysfonctionnements. Les tests unitaires peuvent aider à garantir que la refactorisation ne provoque pas de régressions indésirables et que le code continue de fonctionner correctement.

---

### Dette technique : 

Les dettes techniques sont des tâches qui doivent être effectuées pour améliorer la qualité du code et le maintenir en bon état. Elles peuvent inclure des tâches telles que la correction de bugs, l'optimisation de la performance, l'amélioration de la documentation et la refactorisation.

Dans le contexte des tests unitaires, les dettes techniques peuvent être gérées en utilisant des tests unitaires pour détecter les problèmes potentiels et en effectuant des modifications pour les corriger. Les tests unitaires peuvent aider à détecter les bugs et les dysfonctionnements, ce qui peut aider à prioriser les dettes techniques et à les gérer de manière plus efficace.

De plus, les tests unitaires peuvent être utilisés pour s'assurer que les modifications apportées pour résoudre les dettes techniques ne provoquent pas de régressions indésirables. En exécutant régulièrement les tests unitaires, il est possible de garantir que le code continue de fonctionner correctement, même après des modifications.

---

### Coverage : 

Le coverage est un indicateur de la quantité de code qui est testé par les tests unitaires. Il mesure le pourcentage de code qui est exécuté au moins une fois par les tests unitaires.

Le coverage est un indicateur important de la qualité des tests unitaires, car il montre la quantité de code qui est couverte par les tests et aide à identifier les zones qui ne sont pas suffisamment testées. Cela peut aider à déterminer où des tests supplémentaires sont nécessaires pour garantir que tout le code est correctement testé.

De plus, en utilisant un outil de mesure du coverage, il est possible de surveiller les modifications apportées au code et de vérifier que le coverage reste stable ou s'améliore au fil du temps. Cela peut aider à s'assurer que les tests unitaires sont à jour et couvrent suffisamment de code pour garantir la qualité et la stabilité de l'application.

---

### Branch coverage : 

Le branch coverage est un indicateur de la quantité de branches de code qui est testée par les tests unitaires. Il mesure le pourcentage de branches de code qui ont été exécutées au moins une fois par les tests unitaires.

Les branches de code désignent les décisions logiques dans le code, telles que les conditions `if` et `switch`. Le branch coverage mesure la quantité de ces décisions qui ont été testées par les tests unitaires pour garantir qu'elles fonctionnent correctement.

Le branch coverage est un indicateur important de la qualité des tests unitaires, car il montre la quantité de branches de code qui sont couvertes par les tests et aide à identifier les zones qui ne sont pas suffisamment testées. Cela peut aider à déterminer où des tests supplémentaires sont nécessaires pour garantir que toutes les décisions logiques dans le code sont correctement testées.

De plus, en utilisant un outil de mesure du branch coverage, il est possible de surveiller les modifications apportées au code et de vérifier que le branch coverage reste stable ou s'améliore au fil du temps. Cela peut aider à s'assurer que les tests unitaires sont à jour et couvrent suffisamment de branches de code pour garantir la qualité et la stabilité de l'application.

---

### Test double

Les tests doubles sont une technique de test unitaire utilisée pour tester les dépendances du code en utilisant des substitutions pour les objets et les services externes. Les tests doubles permettent de simuler le comportement des dépendances pour les tester de manière isolée, sans être affectés par des problèmes tels que la latence ou la défaillance des services externes.

Il existe plusieurs types de tests doubles, tels que les stubs, les mocks et les spy, qui peuvent être utilisés pour remplacer les dépendances du code et tester leur comportement. Les tests doubles permettent de garantir la qualité du code en vérifiant que les dépendances sont correctement utilisées et qu'ils réagissent correctement aux entrées et aux sorties attendues.

En utilisant les tests doubles, les développeurs peuvent écrire des tests unitaires plus fiables et rapides, car ils ne sont pas dépendants du comportement des services externes. Les tests doubles permettent également de garantir la qualité du code en fournissant une couche de protection contre les erreurs de codage et les bugs potentiels dans les dépendances.

---

### Mock

Un mock est un type de test double utilisé en test unitaire pour remplacer les dépendances du code et simuler leur comportement. Les mocks sont des objets simulés qui imitent le comportement des objets réels, permettant aux développeurs de tester leur code sans être affectés par les dépendances externes.

Les mocks permettent de tester les interactions entre le code et ses dépendances en vérifiant que le code envoie les entrées correctes et reçoit les sorties attendues. Les mocks peuvent également être utilisés pour tester les exceptions et les erreurs, ainsi que pour simuler des réponses lentes ou défaillantes des dépendances.

En utilisant les mocks, les développeurs peuvent écrire des tests unitaires plus rapides et fiables, car ils ne sont pas affectés par les problèmes des dépendances externes. Les mocks permettent également de mieux comprendre les interactions entre le code et ses dépendances, ce qui peut aider les développeurs à identifier et à corriger les bugs potentiels.

---

### Stub

Un stub est un type de test double utilisé en test unitaire pour remplacer les dépendances du code et simuler leur comportement. Les stubs sont des objets simulés qui imitent les réponses attendues des dépendances, permettant aux développeurs de tester leur code sans être affectés par les dépendances externes.

Les stubs permettent de tester les interactions entre le code et ses dépendances en vérifiant que le code reçoit les entrées correctes et renvoie les sorties attendues. Les stubs peuvent également être utilisés pour tester les exceptions et les erreurs, ainsi que pour simuler des réponses lentes ou défaillantes des dépendances.

Contrairement aux mocks, les stubs sont généralement utilisés pour fournir des réponses prédéfinies aux interactions du code avec ses dépendances, plutôt que pour vérifier que le code envoie les entrées correctes. Les stubs peuvent être utilisés pour remplacer des dépendances qui sont difficiles à tester, coûteuses en termes de performance ou inaccessibles pour des raisons de sécurité ou de confidentialité.

En utilisant les stubs, les développeurs peuvent écrire des tests unitaires plus rapides et fiables, car ils ne sont pas affectés par les problèmes des dépendances externes. Les stubs permettent également de mieux comprendre les interactions entre le code et ses dépendances, ce qui peut aider les développeurs à identifier et à corriger les bugs potentiels.

