describe.skip('send email using send grid', function () {
    it('should send email message', function (done) {
        var sendgrid = require('sendgrid')('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');
        sendgrid.send({
            to: 'sr.sunkari@gmail.com',
            from: 'rent-portal@herokuapp.com',
            subject: 'Test Email',
            text: 'My first email through SendGrid.'
        }, function (err, json) {
            if (err) {
                return console.error(err);
            }
            console.log(json);
            done();
        });

    });
});