// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const get = require('../../shared/get.js');

const getLatestVersion = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await get(
				'https://nightly.webkit.org/'
			);
			// https://stackoverflow.com/a/1732454/96656
			const regex = /<h6><a href="[^"]+">r(\d+)<\/a><\/h6>/;
			const version = regex.exec(response.body)[1];
			resolve(version);
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = getLatestVersion;
