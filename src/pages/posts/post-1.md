---
layout: '@/layouts/MarkdownPostLayout.astro'
title: 'My First Blog Post'
date: '2022-07-01'
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["astro", "blogging", "learning in public"]
category: "astro"
---

# 1.字符串拼接



### 1.占位拼接

**字符串占位`%s`**

```python
class_num = 57
avg_salary = 16781
message = "python大数据科学，北京%s期，毕业均工资：%s" % (class_num,avg_salary)
print(message)
```

```python
name="akbar"
message="欢迎你%s!" % name
print(message)
```

**整数占位`%d`**

```python
age=22
message="今年%d岁" % age
print(message)
```

**浮点数占位`%f`**



### 2.数字精度控制

**`m.n`来控制数据的宽度和精度**：

比如：`%5.2f`，占5位，小数部分精度2位

```python
num1=11.346
print("保留小数点3位%.2f" % num1)
```



### 3.快速格式化字符串

```python
name="akbar"
age=22
password="123456"
print(f"我是{name},今年{age}岁，密码：{password}")
```

注意：快速格式化不做精度控制，原样输出



### 4.表达式的格式化

```python
print("1*1的结果：%d" % (1*1))
print(f"5*5的结果：{5*5}")
print("字符串python中的数据类型：%s" % type("字符串"))
```



# 2.数据输入

不带提示信息的`input`

```python
print("请输入姓名：")
name=input()
print("欢迎你%s" % name)
```

带提示信息的`input`

```python
name=input("请输入姓名：")
print("欢迎你%s" % name)
```

**==注意：==**input默认接受的都是字符串

```python
num=input("请输入一个数字：")
print("该数据类型是：",type(num))
```

输出：`该数据类型是： <class 'str'>`



# 3.布尔类型

```python
flag=False
flag2=True
print(type(flag))
```

输出：

`<class 'bool'>`

---

*   `True` 被视为整数 `1`或者比0大的数字。
*   `False` 被视为整数 `0`。



# 4.if 语句

**单个`if`**

```python
gender = input("请输入你的性别：")
if gender == "boy":
    print("你是男生")
```



**`if else`语句**

```python
gender = input("请输入你的性别：")
if gender == "boy":
    print("你是男生")
else:
    print("你是女生")
```



**`if elif else`语句**

```python
gender = input("请输入你的性别：")
if gender == "boy":
    print("你是男生")
elif gender == "grill":
    print("你是女生")
else:
    print("输入不准确！")
```



# 5.while循环

```python
i = 0
while i < 100:
    print("我爱你！")
    i+=1
```



**1到100的和**

```python
sum = 0
i = 1
while i <= 100:
    sum += i
    i += 1
print(sum)
```



# 6.for循环

## 1.基础语句

```python
name = "akbar"
for i in name:
    print(i)
```



**计算字符串里面有多少个a：**

```python
name="akbar"
sum_of_a=0
for i in name:
    if i=="a":
        sum_of_a+=1
print(sum_of_a)
```



## 2.range语句

range是序列类型，一个一个一次取出的一种类型

作用：获得数字序列

---

语法1：`range(num)`

比如：`range(5)`，获得序列为：`[0,2,3,4]`

```python
for i in range(10):
    print(i)
```

---

语法2：`range(num1,num2)`

比如：`range(5,10)`

取得：`[5,6,7,8,9]`

```python
for i in range(10,20):
    print(i)
```

---

语法3：`range(num1,num2,step)`，step默认为：1

比如：`range(5,10,2)`,step位2

取得：`[5,7,9]`

```python
for i in range(10,20,2):
    print(i)
```



## 3.for循环中的作用域

```python
for i in range(10):
    print(i)
print(i)
```

在变成规范上，i 应该只有在`for`循环内部有效，不应该在`for`循环外部有效

但是想访问，可以访问。



## 4.continue和break

`continue`结束本次，重新开始

```python
for i in range(10):
    if i==3:
        continue
    print(i)
```

`break`整个循环都结束。



# 7.函数

**有参数：**

```python
def my_len(data):
    total=0
    for i in data:
        total+=1
    return total

name="akbar"
print(my_len(name))
```

```python
def add_two_number(a,b):
    print(a+b)
add_two_number(4,5)
```

**没有参数：**

```python
def say_hello():
    print("Hello,nice to meet you!")
    return
say_hello()
```



## 1.None类型

如果没有返回（没有return）,那么返回了空。

```py
def add_two_number(a,b):
    print(a+b)
```

## 2.函数说明

```
def my_len(data):
    """
    my_len函数接受一个数据，求该数据的长度
    :param data: 接收到的数据
    :return: 返回该数据的长度
    """
    total=0
    for i in data:
        total+=1
    return total
```



## 3.函数中变量作用域

函数中的变量，只能在函数中使用。



## 4.多个返回值

```python
def test_return():
    return 1,2
```

```python
def test_return():
    return 1,2
x,y=test_return()
print(x)
print(y)
```

==注意：==不能下面这样写：

```python
def test_return():
    return 1
    return 2
```



## 5.各种传参方式




## 6.缺少参数的情况




## 7.传递不定长参数




## 8.函数作为参数传递


## 9.匿名函数

`lambda 传入参数：函数体（一行代码）`

`test_func(lambda x,y:x+y)`

```python
def test_func(compute):
    result = compute(1, 2)
    print(result)


test_func(lambda x, y: x + y)

# 该lambda函数，相当于：
def compute(x,y):
    return x+y
```

没办法重复使用



# 8.list列表

**定义列表：**

1.定义并赋值

```python
list_one=[1,2,3,4,5]
```

2.定义空列表

```python
list_one=list()
list_two=[]
```

3.嵌套列表

```python
my_list=[[1,2,3],[4,5,6]]
print(my_list)
```



**列表的索引：**

1.普通列表

```python
my_list=[1,2,3,4,5]
print(my_list[3])
```

2.嵌套列表

```python
my_list=[[1,2,3],[4,5,6]]
print(my_list[1][2])
```

3.倒叙索引

```python
my_list=[1,2,3,4,5]
print(my_list[-1]) # 5
print(my_list[-2]) # 4
print(my_list[-3]) # 3
print(my_list[-4]) # 2
print(my_list[-5]) # 1
```



## 1.列表的常用方法

**1.查找元素的下标索引值（index）：**

如果元素不存在，会报错

```python
my_list=[1,2,3,4,5]
index=my_list.index(2)
print(index)
```

**2.修改特定位置的元素值：**

```python
my_list=[1,2,3,4,5]
my_list[0]=100
print(my_list)
```

**3.列表指定位置插入元素（insert）：**

```python
my_list=[1,2,3,4,5]
my_list.insert(1,200)
print(my_list)
```

**4.单个元素的追加，添加到最后（append）：**

```python
my_list=[1,2,3,4,5]
my_list.append(100)
print(my_list)
```

**5.列表追加多个元素（extend）：**

```python
my_list=[1,2,3,4,5]
my_list2=[1,2,3,4,5]
my_list.extend(my_list2)
print(my_list)
```

**6.元素的删除（del 列表[下标]）：**

```python
my_list=[1,2,3,4,5]
del my_list[1]
print(my_list)
```

**7.元素的删除（列表.pop(下标)）：**

```python
my_list=[1,2,3,4,5]
my_list.pop(3)
print(my_list)
```

**8.删除某元素在列表中的第一个匹配项（remove）：**

```python
my_list=[1,2,3,4,5]
my_list.remove(3)
print(my_list)
```

**9.清空列表（clear）：**

```python
my_list=[1,2,3,4,5]
my_list.clear()
print(my_list)
```

**10.统计某一个元素在列表中的数量（count）：**

```python
my_list=[1,2,3,4,5]
my_list_count=my_list.count(3)
print(my_list_count)
```

**11.统计列表中总共有多少个元素（len）：**

```python
my_list=[1,2,3,4,5]
my_list_count=len(my_list)
print(my_list_count)
```

## 2.遍历列表

```python
my_list=[1,2,3,4,5]
for item in my_list:
    print(item)
```

```python
my_list = [1, 2, 3, 4, 5]
index = 0

while index < len(my_list):
    print(my_list[index])
    index += 1  # 增加索引以遍历下一个元素
```



# 9.元组

元组一旦定义完成，就不能修改

1.定义并赋值

```python
my_tuple=(1,2,3)
```

2.定义空tuple

```python
my_tuple=()
my_tuple2=tuple()
```

3.嵌套元组

```python
my_tuple=((1,2,3),(4,5,6))
```



**下标索引去除元组中的元素：**

```python
my_tuple=(1,2,3,4,5)
var = my_tuple[1]
print(var)
```

```python
my_tuple=((1,2,3),(4,5,6))
var = my_tuple[0][1]
print(var)
```



## 1.元组操作

**1.查找某个元素（index）：**

如果该数据不存在，则报错

```python
my_tuple=(1,2,3,4,5)
var=my_tuple.index(3)
print(var)
```

**2.统计某一个元素在元组中的数量（count）：**

```python
my_tuple=(1,2,3,4,5)
var=my_tuple.count(2)
print(var)
```

**3.统计元组中的所有数据有多少个（len）：**

```python
my_tuple=(1,2,3,4,5)
var= len(my_tuple)
print(var)
```



# 10.字符串

字符串也是容器，就是存放字符的容器

支持下标

不可以修改

```python
my_str="akbar"
var = my_str[1]
print(var)
```

## 1.字符串常用操作

**1.查找下标索引值（index）：**

```python
my_str="akbar"
value=my_str.index("bar")
print(value)
```



**2.字符串的替换（replace）：**

语法：`字符串.（字符串1，字符串2）`

把字符串1的全部元素删掉，替换成字符串2，得到一个新的字符串（返回值）

```python
my_str="akbar"
new_my_str=my_str.replace("ak","sa")
print(new_my_str)
```



**3.字符串的分割（split）：**

按照指定的分隔符分割字符串，将字符串划分为多个字符串，并存入列表对象中

```python
my_str="akbar saipulla"
my_str_list=my_str.split(" ")
print(my_str_list)
```



**4.字符串的规整操作（strip）：**

如果不传参数，默认会去除头和尾的空格

```python
my_str="akbar saipulla"
my_ne_str=my_str.strip()
print(my_ne_str)
```



指定参数，去除头和尾的元素

```python
my_str="12akbar saipulla12"
my_ne_str=my_str.strip("12")
print(my_ne_str)
```



**5.统计某个字符出现的次数（count）：**

```python
my_str="12akbar saipulla12"
value=my_str.count("12")
print(value)
```



**6.求字符串的总长度（len）**

```python
my_str="12akbar saipulla12"
print(len(my_str))
```



# 11.set集合

==元素不能重复。，并且内部是无序的==

因为是无序，所以不支持下标索引访问

允许修改

可以用来去重

```python
my_set={1,2,3}
my_set1=set()
{1,2,3,4}
```



## 1.集合操作

**1.添加元素（add）：**

```python
my_set={1,2,3}
my_set.add(4)
```



**2.移除元素（remove）：**

跟list相似



**3.从集合中随机去除一个元素（pop）：**

因为没有下标，所以该方法没有参数

```python
my_set={1,2,3}
element=my_set.pop()
print(element)
print(my_set)
```



**4.清空（clear）：**

跟列表list类似



**5.取两个集合的差集（difference）：**

取两个集合的差集，得到一个新集合

```python
set1={1,2,3}
set2={2,3,4}
set3=set1.difference(set2)  # 得到1里面有的，2里面没有的
print(set3)
```



**6.消除差集（difference_update）：**

在集合1内，删除集合2相同的元素

```python
set1={1,2,3}
set2={2,3,4}
set1.difference_update(set2) 
print(set1)
```



**7.两个集合合并（union）：**

合并后得到一个新的集合

```python
set1={1,2,3}
set2={2,3,4}
set3=set1.union(set2)
print(set3)
```



**8.统计集合中的总元素数量（len）：**

跟list和set一样



**9.集合遍历：**

集合不支持下标索引，==所以不能用while循环遍历==



# 12.dict字典

通过某个东西，找到关联的东西。

键值对。

key不可以重复。

`{key:value,key:value....}`

```python
{"akbar":99,"saipull":77}

# 定义空字典
my_dict2={}
my_dict3=dict()
```

没有下标索引。



**通过key获取元素的值：**

```python
my_dict={"akbar":99,"saipull":77}
print(my_dict["akbar"])
```



**嵌套字典：**

```python
stu_score_dict = {
    "王力宏": {
        "语文": 77,
        "数学": 66,
        "英语": 33
    },
    "周杰伦": {
        "语文": 88,
        "数学": 86,
        "英语": 55
    },
    "林俊杰": {
        "语文": 99,
        "数学": 96,
        "英语": 55
    }
}

print(f"学生的考试信息是:{stu_score_dict}")
```

**从嵌套字典中获取数据：**

```python
stu_score_dict = {
    "王力宏": {
        "语文": 77,
        "数学": 66,
        "英语": 33
    },
    "周杰伦": {
        "语文": 88,
        "数学": 86,
        "英语": 55
    },
    "林俊杰": {
        "语文": 99,
        "数学": 96,
        "英语": 55
    }
}

print(f"学生的考试信息是:{stu_score_dict}")
print(stu_score_dict["周杰伦"]["语文"])
```



## 1.字典的常用操作

**1.新增元素：**

如果该`key:value`存在，相当于修改，如果不存在，相当于新增：

```python
my_dict={"akbar":99,"saipull":77}
my_dict["xiaheda"]=66
print(my_dict)
```



**2.删除（pop）:**

```python
my_dict={"akbar":99,"saipull":77}
my_dict["xiaheda"]=66
score=my_dict.pop("xiaheda")
print(my_dict)
```



**3.清空（clear）：**

```python
my_dict={"akbar":99,"saipull":77}
my_dict["xiaheda"]=66
my_dict.clear()
print(my_dict)
```



**4.获取全部key：**

```python
my_dict={"akbar":99,"saipull":77}
print(my_dict.keys())
```



**5.遍历字典：**

```python
my_dict = {"akbar": 99, "saipull": 77}
keys = my_dict.keys()
for key in keys:
    print(f"key:{key}")
    print(f"value:{my_dict[key]}")
```

第二种方式：

```python
my_dict = {"akbar": 99, "saipull": 77}
for key in my_dict:
    print(f"key:{key}")
    print(f"value:{my_dict[key]}")
```

字典不能使用while循环遍历



**6.统计字典中元素的数量（len）：**

```python
my_dict = {"akbar": 99, "saipull": 77}
print(len(my_dict))
```



# 13.面向对象

```python
# 设计一个类
class Student:
    name = None
    gender = None
    nationality = None
    native_place = None
    age = None

# 创建一个对象
stu_1 = Student()  # stu_1及时变量也是对象

# 对象属性赋值
stu_1.name="akbar"
stu_1.gender="男"
stu_1.nationality="中国"
stu_1.native_place="新疆"
stu_1.age=22

# 输出stu_1中的数据
print(stu_1.name)
print(stu_1.gender)
print(stu_1.nationality)
print(stu_1.native_place)
print(stu_1.age)
```



## 1.成员变量

就是类的属性

```py
class Student:
    name = None
    gender = None
    nationality = None
    native_place = None
    age = None
```



## 2.成员方法

就是类的行为

```python
class Student:
    # 属性
    name = None
    gender = None
    nationality = None
    native_place = None
    age = None
    # 行为
    def say_hello(self):
        print(f"Hi,大家好，我是{self.name}")
```

`self`相当于 java 中的 this

```python
# 设计一个类
class Student:
    # 属性
    name = None
    gender = None
    nationality = None
    native_place = None
    age = None
    # 行为
    def say_hello(self):
        print(f"Hi,大家好，我是{self.name}")

    def say_age(self,age):
        print(f"大家好，我叫{self.name}，今年{age}岁")

# 创建一个对象
stu_1 = Student()  # stu_1及时变量也是对象

# 对象属性赋值
stu_1.name="akbar"
stu_1.gender="男"
stu_1.nationality="中国"
stu_1.native_place="新疆"
stu_1.age=22

# 输出stu_1中的数据
print(stu_1.name)
print(stu_1.gender)
print(stu_1.nationality)
print(stu_1.native_place)
print(stu_1.age)
stu_1.say_hello()
stu_1.say_age(22)
```



## 3.构造方法

可以使用`__int__()`的方法，称之为构造方法

构造类对象的时候自动执行，创建类对象的时候，如果传了参数，参数自动传递给`__int__()`

```python
# 设计一个类
class Student:
    name=None
    age=None
    tel=None

    def __init__(self,name,age,tel):
        # 把外部传入的值，都传给类中的属性
        self.name=name
        self.age=age
        self.tel=tel
        print("Student类创建了一个对象！")

# 创建对象
student=Student("akbar",23,"123456789")
```



**如果上面的类中没有定义这些变量，这个构造方法，就相当于定义了：**

```python
# 设计一个类
class Student:

    def __init__(self,name,age,tel):
        # 如果上面的类中没有定义这些变量，这个构造方法，就相当于定义了类中的属性
        self.name=name
        self.age=age
        self.tel=tel
        print("Student类创建了一个对象！")

# 创建对象
student=Student("akbar",23,"123456789")
```



## 4.魔术方法



## 5.封装

私有的成员变量：成员变量面前用`__`2个下划线开头，该变量就成了私有变量

私有的成员方法：成员方法面前用`__`2个下划线开头，该方法就成了私有变量

```python
class Phone:
    __current_voltage=1
    def __keep_single_core(self):
        print("让cpu单核运行")

    # 类中的其它成员可以使用私有的方法和变量
    def call_by_5G(self):
        if self.__current_voltage>=1:
            print("5G通话已开启")
        else:
            self.call_by_5G()

phone=Phone()
phone.call_by_5G()
```



# 14.逻辑判断

`and`：相当于Java中的 `&&`

`or`：相当于Java中的`||`

`not`：逻辑非

`!=`：不相等，跟Java一样

