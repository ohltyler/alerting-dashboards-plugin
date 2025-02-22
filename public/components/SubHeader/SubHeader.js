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

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { EuiHorizontalRule, EuiText, EuiTitle } from '@elastic/eui';

const DEFAULT_PROPS = { size: 'xs', style: { paddingLeft: '10px' } };
const SubHeader = ({
  description,
  descriptionProps = DEFAULT_PROPS,
  horizontalRuleMargin = 'xs',
  title,
  titleProps = DEFAULT_PROPS,
}) => (
  <Fragment>
    <EuiTitle {...titleProps}>{title}</EuiTitle>
    <EuiHorizontalRule margin={horizontalRuleMargin} />
    <EuiText {...descriptionProps}>{description}</EuiText>
  </Fragment>
);

SubHeader.propTypes = {
  description: PropTypes.node.isRequired,
  descriptionProps: PropTypes.object,
  horizontalRuleMargin: PropTypes.string,
  title: PropTypes.node.isRequired,
  titleProps: PropTypes.object,
};

export default SubHeader;
