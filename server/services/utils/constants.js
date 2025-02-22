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

export const API_ROUTE_PREFIX = '/_opendistro/_alerting';
export const MONITOR_BASE_API = `${API_ROUTE_PREFIX}/monitors`;
export const AD_BASE_API = `/_opendistro/_anomaly_detection/detectors`;
export const DESTINATION_BASE_API = `${API_ROUTE_PREFIX}/destinations`;
export const EMAIL_ACCOUNT_BASE_API = `${DESTINATION_BASE_API}/email_accounts`;
export const EMAIL_GROUP_BASE_API = `${DESTINATION_BASE_API}/email_groups`;
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'User-Agent': 'OpenSearch-Dashboards',
};
export const CLUSTER = {
  ADMIN: 'admin',
  ALERTING: 'opensearch_alerting',
  AD_ALERTING: 'alerting_ad',
  DATA: 'data',
};
