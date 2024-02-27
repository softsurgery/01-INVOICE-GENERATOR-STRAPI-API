'use strict';

/**
 * payment-term service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::payment-term.payment-term');
