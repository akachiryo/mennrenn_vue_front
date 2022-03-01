#!/bin/sh

aws s3 rm s3://mennrenn-s3/ --recursive
aws s3 cp dist s3://mennrenn-s3/ --recursive