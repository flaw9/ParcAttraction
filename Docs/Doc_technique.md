---
title: Documentation technique
author: Tom Rouillon
date: 15/03/2024
...

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<style>
h1 {
    text-align: center;
}
body {
   font-family: "Oxygen", sans-serif;
   font-size: 12pt;
   max-width: 80%;
   margin: auto;
   text-align: justify;
}
nav {
    display: none;
}
</style>
<body>

# Documentation technique

## Backend

Pour le backend, qui est uniquement une API, la technologie utilisée est Flask, un framework Python. La base de données est une base de données SQL, et plus précisément MariaDB.

## Frontend

Pour le frontend, la technologie utilisée est Angular, version 17.

### Langues

#### Ajout d'une nouvelle langue

L'application est disponible en différentes langues. Pour le moment, seules les langues française et anglaise sont disponibles, mais il est possible d'ajouter d'autres langues.

Pour cela, il faut d'abord créer un nouveau fichier fichier de traduction dans le dossier `parc/src/assets/i18n`. Le nom du fichier doit être le code de la langue, suivi de `.json`. Par exemple, pour ajouter le russe, il faudrait créer un fichier `ru.json`.

Copier ensuite le contenu d'un des fichiers existants (par exemple `fr.json` ou `en.json`) et traduire les chaînes de caractères.

Dès que la traduction est faite, se rendre dans le fichier `parc/src/app/app.component.ts`. Dans celui-ci, ajouter le code de la langue dans la variable `langs`. Le code HTML se mettra automatiquement à jour pour afficher cette nouvelle langue dans le menu déroulant.

#### Ajout de contenu

S'il y a besoin d'ajouter de nouvelles pages ou du nouveau contenu sur l'application, il faudra penser à traduire ces nouvelles chaînes de caractères. Pour chaque fichier de traduction, il faudra ajouter un nouvel enregistrement au format json.

Après cela fait, se rendre dans les fichiers `component.html`, et ajouter ce code ci-dessous pour que le contenu soit traduit :

```js
{{ 'NOM_DU_CONTENU' | translate }}
```

Il est également possible d'avoir des clés imbriquées. Dans ce cas, il est possible d'utiliser le code suivant :

```js
{{ 'NOM_DU_CONTENU.IMBRIQUE' | translate }}
```

Si votre IDE vous propose d'importer le module `TranslateModule`, acceptez. Sinon, aller dans le fichier `component.ts` correspondant et ajouter cet import :

```typescript
import { TranslateModule } from '@ngx-translate/core';
```

#### Problèmes potentiels

Quand une langue est choisie depuis le menu déroulant, tous les contenus étant sous la forme indiquée ci-dessus sont censés être traduits directement, sans besoin de rafraîchir la page. Si ce n'est pas le cas, vérifier que le module est bien importé, et que tous les fichiers de traductions possèdent exactement les mêmes clés.

</body>