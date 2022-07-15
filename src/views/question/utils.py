# -*- coding: UTF-8 -*-
class methods:
    # 过滤字符串
    def filter(str, startStr, endStr):
        a = -1
        b = -1
        array = []
        while True:
            a = str.find(startStr, a+1)  # 开始位置
            b = str.find(endStr, b+1)  # 结束位置
            if b == -1:
                break
            else:
                c = str[a+len(startStr):b-len(endStr)+1]
                array.append(c.replace('\n', '').replace(
                    '\r', '').replace(' ', ''))  # 去除换行及空格
        return array

    # 打开文件
    def openFile(str):
        with open(str, "r", encoding='utf-8') as f:  # 打开文件
            return f.read()  # 读取文件


class main:
    # 处理数据交集
    def handleData(startStr, endStr, firstFile, sencondFile):
        firstSourceData = methods.openFile(firstFile)
        firstData = methods.filter(firstSourceData, startStr, endStr)
        sencondSourceData = methods.openFile(sencondFile)
        sencondData = methods.filter(sencondSourceData, startStr, endStr)
        return set(firstData).intersection(set(sencondData))
