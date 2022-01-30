FROM debian:bullseye as base
# Tell Debian we have no user to answer questions
ENV DEBIAN_FRONTEND=noninteractive
# Setup base image
RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y make build-essential git curl wget joe less haproxy openvpn squid net-tools stunnel pwgen unzip

# setup Deno
RUN curl -fsSL https://deno.land/install.sh | sh

# Install config template db
WORKDIR /home/Lethean/conf
RUN git clone https://github.com/letheanVPN/config-templates.git templates

# Setup VPN

RUN echo -e "domain lthn.local\nsearch lthn.local\nnameserver 127.0.0.1\n >/etc/resolv.conf"
