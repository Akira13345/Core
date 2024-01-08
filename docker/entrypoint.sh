#!/bin/bash

set -o errexit -o nounset -o pipefail
set -x

initialize() {
    TOKEN=${TOKEN}

    PRESENCE_ROLE=${PRESENCE_ROLE}
    PRESENCE_STRING=${PRESENCE_STRING}

    SUGGESTION_CHANNEL=${SUGGESTION_CHANNEL}

    MEMBERS_CHANNEL_ID=${MEMBERS_CHANNEL_ID}
    CONNECTED_USERS_CHANNEL_ID=${CONNECTED_USERS_CHANNEL_ID}
    IP=${IP}

    BOOST_ROLE_ID=${BOOST_ROLE_ID}
    BOOST_CHANNEL_ID=${BOOST_CHANNEL_ID}

    TEMPORARY_VOICE_CATEGORY=${TEMPORARY_VOICE_CATEGORY}
    TEMPORARY_VOICE_CHANNEL=${TEMPORARY_VOICE_CHANNEL}

    WELCOME_CHANNEL_ID=${WELCOME_CHANNEL_ID}
    MEMBER_ROLE_ID=${MEMBER_ROLE_ID}

    SUPPORT_ROLE_ID=${SUPPORT_ROLE_ID}
    TICKET_LOGS=${TICKET_LOGS}
    sed 's,{{TOKEN}},'"${TOKEN}"',g' -i /app/.env
    sed 's,{{PRESENCE_ROLE}},'"${PRESENCE_ROLE}"',g' -i /app/.env
    sed 's,{{PRESENCE_STRING}},'"${PRESENCE_STRING}"',g' -i /app/.env
    sed 's,{{SUGGESTION_CHANNEL}},'"${SUGGESTION_CHANNEL}"',g' -i /app/.env
    sed 's,{{MEMBERS_CHANNEL_ID}},'"${MEMBERS_CHANNEL_ID}"',g' -i /app/.env
    sed 's,{{CONNECTED_USERS_CHANNEL_ID}},'"${CONNECTED_USERS_CHANNEL_ID}"',g' -i /app/.env
    sed 's,{{IP}},'"${IP}"',g' -i /app/.env
    sed 's,{{BOOST_ROLE_ID}},'"${BOOST_ROLE_ID}"',g' -i /app/.env
    sed 's,{{BOOST_CHANNEL_ID}},'"${BOOST_CHANNEL_ID}"',g' -i /app/.env
    sed 's,{{TEMPORARY_VOICE_CATEGORY}},'"${TEMPORARY_VOICE_CATEGORY}"',g' -i /app/.env
    sed 's,{{TEMPORARY_VOICE_CHANNEL}},'"${TEMPORARY_VOICE_CHANNEL}"',g' -i /app/.env
    sed 's,{{WELCOME_CHANNEL_ID}},'"${WELCOME_CHANNEL_ID}"',g' -i /app/.env
    sed 's,{{MEMBER_ROLE_ID}},'"${MEMBER_ROLE_ID}"',g' -i /app/.env
    sed 's,{{SUPPORT_ROLE_ID}},'"${SUPPORT_ROLE_ID}"',g' -i /app/.env
    sed 's,{{SUPPORT_ROLE_ID}},'"${SUPPORT_ROLE_ID}"',g' -i /app/.env
    sed 's,{{TICKET_LOGS}},'"${TICKET_LOGS}"',g' -i /app/.env


}

run() {
    exec node index.js
}

initialize
run

exit 0
