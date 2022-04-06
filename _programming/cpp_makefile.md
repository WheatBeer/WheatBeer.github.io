---
title: Makefile
category: C/C++
path: programming/cpp_makefile.md
---

## Template
<hr>

~~~bash
# Directories
SRCDIR=src
OBJDIR=obj
SUBDIRS=$(dir $(wildcard $(SRCDIR)/*/.))

# Flags
CXX=g++
SUBFLAGS=$(addprefix -I, $(patsubst %/, %, $(SUBDIRS)))
CXXFLAGS=-g -Wall -O3 -std=c++11 -I$(SRCDIR) $(SUBFLAGS) 
LDFLAGS=
LIBFLAGS=-lpthread

# Sources(/src) 
SRCS=$(wildcard $(SRCDIR)/*.cc)
HDRS=$(wildcard $(SRCDIR)/*.h) 
OBJS=$(SRCS:$(SRCDIR)/%.cc=$(OBJDIR)/%.o) 
# Subsources(/src/*) 
SUBSRCS=$(wildcard $(SRCDIR)/*/*.cc)
SUBHDRS=$(wildcard $(SRCDIR)/*/*.h)
SUBOBJS=$(addprefix $(OBJDIR)/, $(notdir $(patsubst %.cc, %.o, $(SUBSRCS))))
# Executable
EXE=output_name

# Targets
.PHONY: default
default: $(EXE)

$(EXE): $(SUBOBJS) $(OBJS) 
	@echo "# Makefile Target: $@" 
	$(CXX) $(CXXFLAGS) $(LDFLAGS) -o $@ $^ $(LIBFLAGS) 

$(OBJDIR)/%.o: $(SRCDIR)/%.cc $(HDRS)
	@mkdir -pv $(OBJDIR)
	$(CXX) $(CXXFLAGS) -o $@ -c $< 

$(OBJDIR)/%.o: $(SRCDIR)/*/%.cc $(SUBHDRS)
	@mkdir -pv $(OBJDIR)
	$(CXX) $(CXXFLAGS) -o $@ -c $< 

.PHONY: clean
clean:
	@rm -f $(OBJS) $(SUBOBJS) $(EXE)
	@rm -rf $(OBJDIR)
	@echo "# Makefile Clean: $(OBJDIR)/'s [ $(notdir $(OBJS) $(SUBOBJS) ] and [ $(EXE)) ] are removed" 
~~~

- Above ***Makefile*** supports directories with following structure.

~~~bash
# For C++
  . 
  ├── Makefile
  └── src
      ├── main.cc
      ├── src1.h
      ├── src1.cc
      ├── ...
      └── subsrc
          ├── subsrc1.h
          ├── subsrc1.cc
          └── ...
~~~
