/**
 * @generated SignedSource<<79cee32a7656c1087ad5b78ddc6aa4c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmDetailFragment$data = {
  readonly id: string;
  readonly producers: ReadonlyArray<string | null> | null;
  readonly releaseDate: string | null;
  readonly " $fragmentType": "FilmDetailFragment";
};
export type FilmDetailFragment$key = {
  readonly " $data"?: FilmDetailFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmDetailFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./TestQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "FilmDetailFragment",
  "selections": [
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "ac55ff3a6a976f779bf8bec27838932b";

export default node;
