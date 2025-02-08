ARG GO_VERSION=1.23.5
ARG ALPINE_VERSION=3.21

FROM golang:${GO_VERSION}-alpine${ALPINE_VERSION}

WORKDIR /app

RUN apk update \
&& apk add bash \ 
&& apk add just

COPY go.mod .
COPY go.sum .

RUN go mod download
