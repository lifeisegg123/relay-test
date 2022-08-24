/**
 * @generated SignedSource<<a9906dacb4c339eb0d1f8862ea040971>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailQuery$variables = {
  id: string;
};
export type DetailQuery$data = {
  readonly film: {
    readonly " $fragmentSpreads": FragmentRefs<"FilmDetailFragment" | "FilmItemFragment">;
  } | null;
};
export type DetailQuery = {
  response: DetailQuery$data;
  variables: DetailQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FilmItemFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FilmDetailFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "director",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "producers",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b10d7e0f9754ace2a95420f53084cfa6",
    "id": null,
    "metadata": {},
    "name": "DetailQuery",
    "operationKind": "query",
    "text": "query DetailQuery(\n  $id: ID!\n) {\n  film(id: $id) {\n    ...FilmItemFragment\n    ...FilmDetailFragment\n    id\n  }\n}\n\nfragment FilmDetailFragment on Film {\n  producers\n  releaseDate\n  id\n}\n\nfragment FilmItemFragment on Film {\n  director\n  title\n  id\n}\n"
  }
};
})();

(node as any).hash = "4002afff26739ab65957459176e7fe48";

export default node;
