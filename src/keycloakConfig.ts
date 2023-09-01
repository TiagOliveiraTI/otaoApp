import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'otaorealm',
    clientId: 'otaoclient'
}

export const keycloak = new Keycloak(keycloakConfig);
