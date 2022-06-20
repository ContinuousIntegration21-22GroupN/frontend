docker pull annawithtwon/ci-cd-semester-project
docker stop backend && docker rm -f backend
docker run -d -p 3000:3000 --name backend annawithtwon/ci-cd-semester-project
docker pull renkelp/ci-group-n-2022-frontend
docker stop frontend && docker rm -f frontend
docker run -d -p 80:8080 --name frontend renkelp/ci-group-n-2022-frontend