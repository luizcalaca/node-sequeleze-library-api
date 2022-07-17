const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http'); //complemento do chai
const app = require('../../src/app');
const { User } = require('../../src/database/models');
const { expect } = require('chai');
const { ValidationError } = require('joi');
const { encryptPassword } = require('../../src/services/password.service');

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('POST /signin', () => {

    beforeEach(sinon.restore);

    it('enviando email e senha corretas', async () => {

        // mock
        const userDB = {
            id: 4,
            email: 'johndoe@gmail.com',
            password_hash: encryptPassword('pwd12345'),
            name: 'John Doe',
            phone: '(31) 11111-1111'
        };
        sinon.stub(User, 'findOne').resolves(userDB);

        // chamada
        const reqBody = {
            email: 'johndoe@gmail.com',
            password: 'pwd12345',
        }
        const { status, body } = await chai.request(app).post('/signin').send(reqBody);

        // asserts
        expect(status).to.be.eq(200);
        expect(body).to.have.property('token');

    })
});