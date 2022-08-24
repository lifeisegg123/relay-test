/**
 * @generated SignedSource<<cded5ce46779ea16a6dfb854b01e7133>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmItemFragment$data = {
  readonly director: string | null;
  readonly id: string;
  readonly title: string | null;
  readonly " $fragmentType": "FilmItemFragment";
};
export type FilmItemFragment$key = {
  readonly " $data"?: FilmItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmItemFragment",
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
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "7b2097c112b9e1c16e76e90388b24125";

export default node;
