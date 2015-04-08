/**
 * notify
 * Shows a notification on the page.
 *
 * @name notify
 * @function
 * @param {Event} ev The event object.
 * @param {Object} data The data passed to PNotify
 * @return {undefined}
 */
exports.notify = function (ev, data) {
    new PNotify(data);
};
