# microk8s-ingress-example

Microk8s ingress example

Build dockerfile and push to docker repository (using local repository in my case)
```
docker build . -t my-microk8s-app
docker tag my-microk8s-app localhost:5000/my-microk8s-app
docker push localhost:5000/my-microk8s-app
```