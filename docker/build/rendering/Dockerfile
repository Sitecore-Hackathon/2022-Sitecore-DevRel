# escape=`

ARG SOLUTION_IMAGE
ARG PARENT_IMAGE

FROM ${SOLUTION_IMAGE} as solution
FROM ${PARENT_IMAGE}

# Copy rendering assets in
WORKDIR /app
COPY --from=solution /artifacts/rendering/ ./

WORKDIR /entry
COPY ./Start.bat ./

EXPOSE 3000
#ENTRYPOINT ["Start.bat"]
ENTRYPOINT ["powershell"]