/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 *   Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { URL_TYPE } from '../../../containers/CreateDestination/utils/constants';

const fqdn = '(?:[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})*)';
const regname = `(?:[a-zA-Z0-9._-]+(?::[^@]*)?@)?${fqdn}`;
const ipv4 =
  '(((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))';
const h16 = '([0-9a-fA-F]{1,4})';
const ls32 = `((${h16}:${h16})|${ipv4})`;
const ipv6 =
  `\\[(` +
  `((${h16}:){6}${ls32})|` +
  `(::(${h16}:){5}${ls32})|` +
  `(${h16}?::(${h16}:){4}${ls32})|` +
  `(((${h16}:){0,1}${h16})?::(${h16}:){3}${ls32})|` +
  `(((${h16}:){0,2}${h16})?::(${h16}:){2}${ls32})|` +
  `(((${h16}:){0,3}${h16})?::${h16}:${ls32})|` +
  `(((${h16}:){0,4}${h16})?::${ls32})|` +
  `(((${h16}:){0,5}${h16})?::${h16})|` +
  `((${h16}:){0,6}${h16})?::` +
  `)\\]`;

export const validateUrl = (value, allValues) => {
  const type = allValues.type;
  if (allValues[type].urlType !== URL_TYPE.FULL_URL) return;
  if (!value) return 'Required';
  const regexUrl = `^https?:\\/\\/(${regname}|${ipv4}|${ipv6})(:[0-9]{1,5})?([/?#][-a-zA-Z0-9@:%_\\+.~#?&//=]*)?$`;
  const isValidUrl = new RegExp(regexUrl).test(value);
  if (!isValidUrl) return 'Invalid URL';
};

export const validateHost = (value, allValues) => {
  const type = allValues.type;
  if (allValues[type].urlType !== URL_TYPE.ATTRIBUTE_URL) return;
  if (!value) return 'Required';
  const regexHost = `^${fqdn}|${ipv4}|${ipv6}$`;
  const isValidUrl = new RegExp(regexHost).test(value);
  if (!isValidUrl) return 'Invalid Host';
};
